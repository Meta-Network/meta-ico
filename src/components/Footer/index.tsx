import Head from "next/head";
import styles from './index.module.scss'
import Image from 'next/image'

const BiggerIcon = {
    fontSize: '32px',
    color: '#fff',
    marginLeft: '16px'
}

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Head>
                <link href="https://at.alicdn.com/t/font_2395525_sjpifmsr80b.css" rel="stylesheet" key="test" />
            </Head>
            <div className={styles['footer-container']}>
                <div className={styles['footer-share']}>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Meta-Network"><i className="iconfont icon-telegram" style={BiggerIcon}></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Meta-Network"><i className="iconfont icon-twitter" style={BiggerIcon}></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Meta-Network"><i className="iconfont icon-github" style={BiggerIcon}></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Meta-Network"><i className="iconfont icon-medium" style={BiggerIcon}></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Meta-Network"><i className="iconfont icon-facebook" style={BiggerIcon}></i></a>
                </div>
                <div className={styles['footer-about']}>
                    <div className={styles['footer-about_logo']}>
                        <div className={styles['footer-about_logo_item']}>
                            <Image
                                src="/images/logo-meta.png"
                                height={21.84}
                                width={152}
                                alt="Meta Network"
                            />
                            <div style={{ width: 16 }}></div>
                            <Image
                                src="/images/logo-matataki.png"
                                height={32}
                                width={170}
                                alt="Matataki"
                            />
                        </div>
                        <p className={styles['footer-about_logo_right']}>© 2020 - 2021 Meta Network All Rights Served </p>
                    </div>
                    <div className={styles['footer-about_nav']}>
                        <ul>
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Suggestions</a>
                            </li>
                            <li>
                                <a href="">FAQ</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="">Terms of Service</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer