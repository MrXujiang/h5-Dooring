import React, { useState, useCallback } from "react";
import { useModel } from "umi";
import styles from "./index.less";
import ComponentRenderer from "../components/ComponentRenderer";
import { ComponentType } from "@/types/component";

interface ContainerProps {
  components: ComponentType[];
  isPreview?: boolean;
  onComponentSelect?: (id: string) => void;
}

const Container: React.FC<ContainerProps> = ({
  components,
  isPreview = false,
  onComponentSelect
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleComponentClick = useCallback(
    (id: string) => {
      if (isPreview) return;
      setSelectedId(id);
      onComponentSelect?.(id);
    },
    [isPreview, onComponentSelect]
  );

  const sortedComponents = [...components].sort(
    (a, b) => (a.zIndex || 0) - (b.zIndex || 0)
  );

  return (
    <div className={styles.container}>
      {sortedComponents.map((component) => (
        <div
          key={component.id}
          className={`${styles.componentWrapper} ${
            selectedId === component.id && !isPreview ? styles.selected : ""
          }`}
          style={{
            position: "absolute",
            left: component.x,
            top: component.y,
            width: component.width,
            height: component.height,
            zIndex: component.zIndex || 0
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleComponentClick(component.id);
          }}
        >
          <ComponentRenderer
            component={component}
            isPreview={isPreview}
          />
        </div>
      ))}
    </div>
  );
};

export default Container;
