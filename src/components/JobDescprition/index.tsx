import styles from './JobDescription.module.css'

type Props = {
  title: string
  location: string
  level: string
  modality: string
  salaryMin: number
  salaryMax: number
  requirements: string[]
}

const JobDescription = (props: Props) => (
  <li className={styles.job}>
    <h3 className={styles.jobTitle}>{props.title}</h3>
    <ul className={styles.jobsUl}>
      <li>Location: {props.location}</li>
      <li>Level: {props.level}</li>
      <li>Modality: {props.modality}</li>
      <li>
        Salary: {props.salaryMin} - {props.salaryMax}
      </li>
      <li>Requirements: {props.requirements.join(', ')}</li>
    </ul >
    <a className={styles.jobLink} href="#">
      View details and apply
    </a>
  </li >
)

export default JobDescription
