import { FormEvent, useState } from 'react'
import styles from './Form.module.css'



type Props = {
  //search é uma função passada como propriedade (prop) para o componente Form.
  search: (termo: string) => void
}

//search será chamada dentro do componente
//mas sua lógica vem de fora, de onde o componente
//Form está sendo utilizado (no containers/FormList)



const Form = ({ search }: Props) => {
  //Declara uma variável de estado termo, inicialmente como uma string vazia.
  //setTermo é a função para atualizar o valor de termo.

  const [termo, setTermo] = useState<string>('')

  //Função formSubmit eh chamada quando o formulário é enviado (submetido).
  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    //Chama a função search passada via props,
    //passando o termo (convertido para minúsculas) como argumento.
    search(termo.toLocaleLowerCase())
  }
  //
  return (

    // Renderiza um formulário HTML.
    //o evento onSubmit chama a função formSubmit.
    <form className={styles.form} onSubmit={formSubmit}>

      <input
        className={styles.fild}
        placeholder="Front-end, fullstack, node, design"

        // Define o que acontece quando o valor do campo é alterado.
        //  Nesse caso, o valor digitado é armazenado na variável de estado termo.
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />

      <button className={styles.btnSearch} type="submit">
        Pesquisar
      </button>
    </form>
  )
}
export default Form

