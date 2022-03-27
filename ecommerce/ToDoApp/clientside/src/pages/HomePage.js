import React from 'react'
import StddataComp from '../components/stddataComp'
import TaskComp from '../components/taskComp'

function HomePage() {
    return(
        <div>
            <div className='add'>
            <TaskComp></TaskComp>
            </div>
            <div className='list'>
            <StddataComp></StddataComp>
            </div>
        </div>
    )
}

export default HomePage