import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
// import { ping } from '../lib/posts';
import axios from 'axios';

export async function getStaticProps() {
  /*const mensaje = await Promise.all([ping()])
  .then(function (results) {
    return results[0]
  });
  return {
    props: {
      mensaje,
    }
  }*/
  const mensaje = {hola: "Hola"}
  return {
    props: {
      mensaje,
    }
  }
}

export default function Proyectos({ }) {
  function handleClick(first, last) {
    if (first && last !== '') {
      /*axios
        .post('http://localhost:3001/product/create', {
          nombre: first,
          codigo: last
        }
      ).then(res => {
        console.log('res', res.data);
      })*/
    }
  }
  return (
    <div>
      <Head>
        <title>Proyectos</title>
      </Head>
      <section>
        <h1>Proyectos</h1>
        <div className="m-5">
        {/*<div>
          {mensaje.proyectos.map(post =>
          <div
            key={post._id}
            style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
            {/* <p>Nombre: {post.nombre}, Código: {post.codigo}</p> }
            <Link href={`/proyectos/${post.codigo}`}>{post.nombre}, {post.codigo}</Link>
          </div>)}
          </div> */}
          {/* <iframe src="http://localhost:3001/product" ></iframe> */}
        </div>
      </section>
      <section>
        <h1>Hola</h1>
        <div>
          <label htmlFor="first">Nombre Proyecto</label>
          <input type="text" id="first" name="first" required/>
          <label htmlFor="last">Código Proyecto</label>
          <input type="text" id="last" name="last" required/>
          {/*<button onClick={() => handleClick(first.value, last.value)}>Greet</button>*/}
        </div>
      </section>
    </div>
  );
}