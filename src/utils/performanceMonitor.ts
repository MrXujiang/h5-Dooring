interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface PerformanceMetrics {
  ttfb?: number;
  domContentLoaded?: number;
  loadTime?: number;
  firstPaint?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  cumulativeLayoutShift: number;
  longTasks: { name: string; duration: number; startTime: number }[];
  slowResources: { name: string; duration: number; initiatorType: string }[];
}

const metrics: PerformanceMetrics = {
  longTasks: [],
  slowResources: [],
  cumulativeLayoutShift: 0,
};

function logMetric(name: string, value: any) {
  console.log(`[Performance Monitor] ${name}:`, value);
}

function getNavigationTiming() {
  if (performance && performance.getEntriesByType) {
    const [navigationEntry] = performance.getEntriesByType('navigation');
    if (navigationEntry) {
      const nav = navigationEntry as PerformanceNavigationTiming;
      metrics.ttfb = nav.responseStart - nav.requestStart;
      metrics.domContentLoaded = nav.domContentLoadedEventEnd - nav.fetchStart;
      metrics.loadTime = nav.loadEventEnd - nav.fetchStart;

      logMetric('Time to First Byte (TTFB)', `${metrics.ttfb.toFixed(2)}ms`);
      logMetric('DOMContentLoaded', `${metrics.domContentLoaded.toFixed(2)}ms`);
      logMetric('Load Time', `${metrics.loadTime.toFixed(2)}ms`);
    }
  } else if (performance && performance.timing) {
    // Fallback for older browsers (deprecated, but good for robustness)
    const timing = performance.timing;
    metrics.ttfb = timing.responseStart - timing.requestStart;
    metrics.domContentLoaded = timing.domContentLoadedEventEnd - timing.navigationStart;
    metrics.loadTime = timing.loadEventEnd - timing.navigationStart;

    logMetric('Time to First Byte (TTFB) [Legacy]', `${metrics.ttfb.toFixed(2)}ms`);
    logMetric('DOMContentLoaded [Legacy]', `${metrics.domContentLoaded.toFixed(2)}ms`);
    logMetric('Load Time [Legacy]', `${metrics.loadTime.toFixed(2)}ms`);
  }
}

function observePaintTiming() {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-paint') {
          metrics.firstPaint = entry.startTime;
          logMetric('First Paint (FP)', `${metrics.firstPaint.toFixed(2)}ms`);
        } else if (entry.name === 'first-contentful-paint') {
          metrics.firstContentfulPaint = entry.startTime;
          logMetric('First Contentful Paint (FCP)', `${metrics.firstContentfulPaint.toFixed(2)}ms`);
        }
      }
    });
    observer.observe({ type: 'paint', buffered: true });
  }
}

function observeLargestContentfulPaint() {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1]; // Get the latest LCP entry
      if (lastEntry) {
        metrics.largestContentfulPaint = lastEntry.startTime;
        logMetric('Largest Contentful Paint (LCP)', `${metrics.largestContentfulPaint.toFixed(2)}ms`);
      }
    });
    observer.observe({ type: 'largest-contentful-paint', buffered: true });
  }
}

function observeCumulativeLayoutShift() {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutShiftEntry = entry as LayoutShift;
        if (!layoutShiftEntry.hadRecentInput) { // Exclude shifts that happen within 500ms of user input
          metrics.cumulativeLayoutShift += layoutShiftEntry.value;
        }
      }
      logMetric('Cumulative Layout Shift (CLS)', metrics.cumulativeLayoutShift.toFixed(4));
    });
    observer.observe({ type: 'layout-shift', buffered: true });
  }
}

function observeLongTasks() {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const longTask = {
          name: entry.name,
          duration: entry.duration,
          startTime: entry.startTime,
        };
        metrics.longTasks.push(longTask);
        logMetric('Long Task', longTask);
      }
    });
    observer.observe({ type: 'longtask', buffered: true });
  }
}

function observeResources() {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const resource = entry as PerformanceResourceTiming;
        // Define a threshold for "slow" resources, e.g., > 500ms
        const SLOW_RESOURCE_THRESHOLD = 500;
        if (resource.duration > SLOW_RESOURCE_THRESHOLD) {
          const slowResource = {
            name: resource.name,
            duration: resource.duration,
            initiatorType: resource.initiatorType,
          };
          metrics.slowResources.push(slowResource);
          logMetric('Slow Resource', slowResource);
        }
      }
    });
    observer.observe({ type: 'resource', buffered: true });
  }
}

export function initPerformanceMonitor() {
  if (typeof window === 'undefined' || !window.performance) {
    console.warn('[Performance Monitor] Performance API not available in this environment.');
    return;
  }

  console.log('[Performance Monitor] Initializing...');

  // Navigation Timing and final metrics summary on load
  window.addEventListener('load', () => {
    getNavigationTiming();
    console.log('[Performance Monitor] Final Metrics on Load:', metrics);
  });

  // Core Web Vitals and other metrics
  observePaintTiming();
  observeLargestContentfulPaint();
  observeCumulativeLayoutShift();
  observeLongTasks();
  observeResources();
}

// Optional: Export metrics for external access if needed
export { metrics };
