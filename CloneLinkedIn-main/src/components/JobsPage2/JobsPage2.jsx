import JobsHeader from "./JobsHeader/JobsHeader"
import './JobsPage2.css'
import JobCard from './JobCard/JobCard'
import DettagliLavoro from './DettagliLavoro/DettagliLavoro'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const JobsPage2 = () => {
    const [jobsData, setJobsData] = useState([])
    const [jobSelected, setJobSelected] = useState('')
    const [isJobDetailsOn, setIsJobDetailsOn] = useState(false)
    
    const iduser = useParams();
    const token = {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
          'Content-Type': 'application/json'
        },
      }

    const handleJobsFetch = async () => {
        try {
            if(iduser) {
               const res = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${iduser.searchquery}&limit=15`, {
                method: 'GET',
                headers: {
                  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
                  'Content-Type': 'application/json'
                },
              })
              if(res.ok) {
                const data = await res.json()
                setJobsData(data)
                console.log('Dati jobs caricati con successo')
              } else {
                console.log('Errore nel caricamento dei dati')
              }
            }
        } catch(err) {
            console.log('ERRORE, NON ESISTE ID USER', err)
        }
    }

    useEffect(() => {
        handleJobsFetch()
    },[iduser])

    const handleJobSelected = (job) => {
        setJobSelected(job)
        setIsJobDetailsOn(true)
    }

    const closeJobSelected = () => {
        setIsJobDetailsOn(false)
    }
    
    return (
        <>
           <JobsHeader />
            <div className='jobsPageDue'>
                <div className='jobsPageDueLeft'>
                    {jobsData && jobsData.data && jobsData.data.length > 0 ? (
                        jobsData.data.map((job) => {
                            return <JobCard key={job._id} click={() => handleJobSelected(job)} jobData={job}/>
                        })
                    ) : ''}
                </div>
                <div className='jobsPageDueRight'>
                    {jobSelected && isJobDetailsOn ? <DettagliLavoro close={closeJobSelected} jobData={jobSelected}/> : ''}
                </div>
            </div>
        </>
    )
}

export default JobsPage2