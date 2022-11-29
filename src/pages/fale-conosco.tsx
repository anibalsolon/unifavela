import React from "react";

import "./fale-conosco.scss";

import Layout from "../components/layout";

export default () => {
  return (
    <Layout scope="fale-conosco">
      <section id="section-hero" className="row g-0">
        <div className="col-4 offset-2 my-auto px-4">
          <h1>Fale Conosco</h1>
          <p>
          A UniFavela não tem o prefixo Uni à toa: aqui a união faz de verdade a força! A sua ajuda pode tornar nossas ações mais potentes dentro das 16 favelas da Maré. Topa em nos ajudar de alguma forma em busca de uma sociedade mais justa? É só entrar em contato através do formulário:
          </p>
        </div>
        <div className="col-4">
          <form>
            <fieldset className="row mx-3">
              <div className="mb-3 col-12">
                <label htmlFor="form-subject" className="form-label">Assunto</label>
                <input type="text" className="form-control" id="form-subject" />
              </div>
              <div className="mb-3 col-6">
                <label htmlFor="form-email" className="form-label">E-mail</label>
                <input type="email" className="form-control" id="form-email" />
              </div>
              <div className="mb-3 col-6">
                <label htmlFor="form-phone" className="form-label">Telefone</label>
                <input type="password" className="form-control" id="form-phone" />
              </div>
              <div className="mb-3 col-12">
                <label htmlFor="form-message" className="form-label">Mensagem</label>
                <textarea className="form-control" id="form-message" rows={3}></textarea>
              </div>
              <div className="mb-3 col-12 text-end">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </fieldset>
          </form>
        </div>
      </section>
    </Layout>
  )
}
