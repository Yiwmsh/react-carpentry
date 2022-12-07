import styled from "@emotion/styled";
import React, { DOMAttributes } from "react";
import {
  AriaTooltipProps,
  TooltipTriggerProps,
  useTooltip,
  useTooltipTrigger,
  mergeProps,
} from "react-aria";
import { TooltipTriggerState, useTooltipTriggerState } from "react-stately";

export interface TooltipWrapperProps extends TooltipTriggerProps {
  renderChild: (
    ref: React.MutableRefObject<null>,
    triggerProps: DOMAttributes<any>
  ) => React.ReactNode;
  tooltip: string;
}

const TooltipContainer = styled.span`
  position: absolute;
  left: 5px;
  top: 100%;
  max-width: 150;
  margin-top: 10px;
  background-color: white;
  color: black;
  padding: 5px;
  border: 1px solid gray;
`;

const TooltipWrapperContainer = styled.span``;

const Tooltip: React.FC<{
  props: AriaTooltipProps;
  state?: TooltipTriggerState;
  children?: React.ReactNode;
}> = ({ props, state, children }) => {
  const { tooltipProps } = useTooltip(props, state);

  return (
    <TooltipContainer {...mergeProps(props, tooltipProps)}>
      {children}
    </TooltipContainer>
  );
};

export const TooltipWrapper: React.FC<TooltipWrapperProps> = ({
  renderChild,
  tooltip,
  ...rest
}) => {
  const state = useTooltipTriggerState(rest);
  const ref = React.useRef(null);

  const { triggerProps, tooltipProps } = useTooltipTrigger(rest, state, ref);

  return (
    <>
      <TooltipWrapperContainer>
        {renderChild(ref, triggerProps)}
        {state.isOpen && (
          <Tooltip state={state} props={tooltipProps}>
            {tooltip}
          </Tooltip>
        )}
      </TooltipWrapperContainer>
    </>
  );
};
