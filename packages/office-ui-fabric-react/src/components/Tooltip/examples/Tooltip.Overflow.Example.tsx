/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */
import { BaseComponent, css, getId } from 'office-ui-fabric-react/lib/Utilities';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import {
  TooltipHost,
  TooltipOverflowMode
} from 'office-ui-fabric-react/lib/Tooltip';

export interface ITooltipOverflowExampleState {
  overflow: boolean;
  isTooltipVisible: boolean;
}

export class TooltipOverflowExample extends BaseComponent<{}, ITooltipOverflowExampleState> {
  private readonly tooltipId = getId('text-tooltip');

  constructor(props: any) {
    super(props);

    this.state = {
      overflow: false,
      isTooltipVisible: false,
    };
  }

  public render() {
    return (
      <div>
        <DefaultButton onClick={ () => this.setState({ overflow: !this.state.overflow }) }>Toggle showing overflow</DefaultButton>

        <div style={ {
          marginTop: '40px'
        } }>
          <div style={ {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: this.state.overflow && 'nowrap',
            width: this.state.overflow && '200px',
            border: '1px solid black'
          } }>
            <TooltipHost
              content='This is the tooltip'
              id={ this.tooltipId }
              overflowMode={ TooltipOverflowMode.Parent }
              onTooltipToggle={ isTooltipVisible => this.setState({ isTooltipVisible }) }>
              <span aria-describedby={ this.state.isTooltipVisible ? this.tooltipId : undefined }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat lectus ut magna sodales, sit amet accumsan arcu accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </TooltipHost>
          </div>
        </div>
      </div>
    );
  }
}