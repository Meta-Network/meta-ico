import Head from "next/head";
import styles from '../styles/footer.module.css'

const BiggerIcon = {
    fontSize: '2rem'
}

export function Footer() {
    return <footer className={styles.footer}>
                    <Head>
            <link href="https://at.alicdn.com/t/font_2395525_sjpifmsr80b.css" rel="stylesheet" key="test"/>
        </Head>
            <p>Meta Network All Right Reserved. </p>
        <div className={styles.socialBtns}>
            <p>Find us on:{" "}</p>
            <a target="_blank" href="#"><i className="iconfont icon-telegram" style={BiggerIcon}></i></a>
            <a target="_blank" href="#"><i className="iconfont icon-twitter" style={BiggerIcon}></i></a>
            <a target="_blank" href="#"><i className="iconfont icon-github" style={BiggerIcon}></i></a>
            <a target="_blank" href="#"><i className="iconfont icon-medium" style={BiggerIcon}></i></a>
            <a target="_blank" href="#"><i className="iconfont icon-facebook" style={BiggerIcon}></i></a>
        </div>
        
      </footer>
}