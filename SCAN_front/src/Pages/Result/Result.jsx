import { useState } from 'react'
import WeAreLooking from '../../blocks/WeAreLooking/WeAreLooking'
import Summary from '../../blocks/Summary/Summary'
import ListDocuments from '../../blocks/ListDocuments/ListDocuments'


function Result() {
    return (
        <>
        <WeAreLooking />
        <Summary />
        <ListDocuments />
        </>
    )
}

export default Result
