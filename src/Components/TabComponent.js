import React, { useState } from 'react';

const TabComponent = props => {
    const [state, setState] = useState({
        selectedTab: 1
    })

    const tabOnClick = (event, value) => {
        setState({
            selectedTab: value
        })
    }

    return (
        <div>
            <h1>Tabs</h1>
            {[1,2,3].map((val, index) => (
                <button
                    key={index}
                    onClick={e => tabOnClick(e, val)}
                    selected={state.selectedTab === val}
                >
                    Tab {val}
                </button>
                
            ))}
            <div>
                Tab {state.selectedTab} is currently showing.
            </div>
        </div>
    )
}

export default TabComponent;