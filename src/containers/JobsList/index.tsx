import { useState } from 'react'
import Form from '../../components/Form' //funcao e prop SEARCH ... termo (argumento)
import JobDescription from '../../components/JobDescprition' //as props de JobDescription

import styles from './JobsList.module.css'

type JobDescription = {//passando as props do JobDescriptiom(type Prop)
  title: string
  location: string
  level: string
  modality: string
  salaryMin: number
  salaryMax: number
  requirements: string[]
}


//usando as props criadas em JobDescription
const jobs = [
  {
    id: 1,
    title: 'Front-end developer',
    location: 'remote',
    level: 'junior',
    modality: 'employee',
    salaryMin: 3000,
    salaryMax: 4500,
    requirements: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 2,
    title: 'NodeJS developer',
    location: 'remote',
    level: 'developer',
    modality: 'independent contractor',
    salaryMin: 5000,
    salaryMax: 6500,
    requirements: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 3,
    title: 'Fullstack developer',
    location: 'remote',
    level: 'fullstack developer',
    modality: 'independent contractor',
    salaryMin: 4000,
    salaryMax: 6000,
    requirements: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 4,
    title: 'Interfaces designer ',
    location: 'remote',
    level: 'junior',
    modality: 'employee',
    salaryMin: 4000,
    salaryMax: 5000,
    requirements: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 5,
    title: 'Front-end developer',
    location: 'remote',
    level: 'senior',
    modality: 'independent contractor',
    salaryMin: 7000,
    salaryMax: 8000,
    requirements: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 6,
    title: 'Front-end (international projects)',
    location: 'remote',
    level: 'senior',
    modality: 'employee',
    salaryMin: 12000,
    salaryMax: 15000,
    requirements: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },

  {
    id: 7,
    title: 'Front-end developer',
    location: 'São Paulo/SP',
    level: 'junior',
    modality: 'employee',
    salaryMin: 4000,
    salaryMax: 5000,
    requirements: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 8,
    title: 'Front-end developer',
    location: 'remote',
    level: 'senior',
    modality: 'independent contractor',
    salaryMin: 8000,
    salaryMax: 10000,
    requirements: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 9,
    title: 'Front-end developer',
    location: 'remote',
    level: 'developer',
    modality: 'independent contractor',
    salaryMin: 5000,
    salaryMax: 7000,
    requirements: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 10,
    title: 'Front-end developer',
    location: 'São Paulo/SP',
    level: 'junior',
    modality: 'employee',
    salaryMin: 1000,
    salaryMax: 3000,
    requirements: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 11,
    title: 'Fullstack developer',
    location: 'remote',
    level: 'senior',
    modality: 'independent contractor',
    salaryMin: 12000,
    salaryMax: 18000,
    requirements: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 12,
    title: 'Interfaces designer ',
    location: 'remote',
    level: 'senior',
    modality: 'employee',
    salaryMin: 5000,
    salaryMax: 10000,
    requirements: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
]

//FILTRANDO LISTA

const JobsList = () => {
  const [filter, setFilter] = useState<string>('')


  const jobsFiltered = jobs.filter(  // jobs = const jobs[]
    (x) => x.title.toLocaleLowerCase().search(filter) >= 0
  )

  return (
    <div>
      {/* Você está renderizando o componente Form e passando uma prop chamada search. */}
      {/* O componente Form lida com a coleta do input do usuário e o envio da busca. */}
      <Form search={(termo: string) => setFilter(termo)} />

      {/* Essa função anônima (termo: string) => setFilter(termo)
      recebe um argumento termo, que é o valor de busca digitado no campo de
      texto dentro do componente Form. */}

      {/* ela pega o termo que é enviado pelo Form e chama a função setFilter(termo).
      Isso significa que o termo de busca digitado no formulário será usado para definir
       o estado filter (presumivelmente, em um componente pai...Form). */}


      <ul className={styles.vacancy}>

        {/* O map cria um novo array de JSX a partir de jobsFiltered,
      e para cada job da lista, ele retorna o componente
       JobDescription preenchido com as propriedades do job. */}
        {jobsFiltered.map((job) => (
          <JobDescription
            key={job.id}
            title={job.title}
            location={job.location}
            level={job.level}
            modality={job.modality}
            salaryMin={job.salaryMin}
            salaryMax={job.salaryMax}
            requirements={job.requirements}
          />
        ))}
      </ul>
    </div>
  )
}

export default JobsList
