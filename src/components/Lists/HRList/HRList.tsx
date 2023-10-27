'use client'

import ResumeCard from '@/components/ResumeCard/ResumeCard'
import { useResumeStore } from '@/stores/resumeStore'
import { useEffect } from 'react'

const HRList = () => {
  const { hr, fetchHR } = useResumeStore()

  useEffect(() => {
    void fetchHR()
  }, [])
  return (
    <>
      {hr.map((res) =>
        <ResumeCard resume={res} key={res.id}/>
      )}
    </>
  )
}
export default HRList