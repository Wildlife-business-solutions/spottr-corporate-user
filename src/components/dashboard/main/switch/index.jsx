import React from 'react'
import { SwitchInput, SwitchSlider, SwitchWrapper } from './style'

function ToggleSwitch({handleSwitch, checkedVal}) {
    return (
        <SwitchWrapper>
            <SwitchInput type="checkbox" onChange={handleSwitch} value={checkedVal}/>
            <SwitchSlider />
        </SwitchWrapper>
    )
}

export default ToggleSwitch
