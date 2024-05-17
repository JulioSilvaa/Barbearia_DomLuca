import styles from "./styles.module.css"

function Form() {
  return (
    <form className={styles.form_conatiner}>
      <label htmlFor="name" >
        Name:
        <input type="text" name="name" id="name" />
      </label>
      <label htmlFor="telefone" >
        Telefone:
        <input type="text" name="telefone" id="telefone" />
      </label>
      <label htmlFor="email" >
        Email:
        <input type="text" name="email" id="email"/>
      </label>
      <input type="submit" value="Enviar" />
    </form>
  )
}

export default Form
