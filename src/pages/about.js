import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import Sidebar from '../components/sidebar'
import aboutStyles from './about.module.scss'

const AboutPage = () => {
	return (
		<Layout>
			<Head title="About" description="About page"/>
			<div className={aboutStyles.content}>
				<h1>自己紹介</h1>
				<p>はじめまして、原田順啓と申します。</p>
				<p>1982年生まれ。蠍座。</p>
				<p>東京都目黒区在住。</p>
				<p>好きなアーティストはBump Of Chicken。</p>
				<p>趣味はバスケットボール(NBA, 国内学生)観戦、読書(マンガ、自己啓発、自伝、IT関連、政治経済金融など)、海外ドラマ、映画鑑賞です。</p>
				<h1>スキル</h1>
					<p>・言語：PHP, JavaScript, Swift</p>
					<p>・フレームワーク：Laravel, Zend Framework</p>
					<p>・データベース：MySQL, PostgreSQL</p>
					<p>・OS：macOS, Linux, Windows</p>
					<p>・その他：Git, Vi</p>
				<h1>ポートフォリオサイト</h1>	
					<a href="https://nobuhiroharada.github.io/simple-resume/" rel="noreferrer noopener" target="_blank">ポートフォリオサイトへ</a>
				<h1>経歴</h1>
				<table>
					<thead>
						<tr>
							<th className={aboutStyles.tableYearMonth}>年月</th>
							<th className={aboutStyles.tableContent}>内容</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className={aboutStyles.tableYearMonth}>2001年3月</td>
							<td className={aboutStyles.tableContent}>京都府東山高校卒業</td>
						</tr>
						<tr>
							<td className={aboutStyles.tableYearMonth}>2002年3月</td>
							<td className={aboutStyles.tableContent}>代々木ゼミナール京都校卒業</td>
						</tr>
						<tr>
							<td className={aboutStyles.tableYearMonth}>2006年3月</td>
							<td className={aboutStyles.tableContent}>関西外国語大学英米語学科卒業</td>
						</tr>
						<tr>
							<td className={aboutStyles.tableYearMonth}>2006年8月</td>
							<td className={aboutStyles.tableContent}>派遣事務の仕事に就くと同時に大阪府大阪市旭区千林大宮に移住</td>
						</tr>
						<tr>
							<td className={aboutStyles.tableYearMonth}>2008年9月</td>
							<td className={aboutStyles.tableContent}>リーマンショックの影響で派遣切りにあう</td>
						</tr>
						<tr>
							<td className={aboutStyles.tableYearMonth}>2008年10月</td>
							<td className={aboutStyles.tableContent}>大阪府大阪市淀川区十三に移住</td>
						</tr>
						<tr>
							<td className={aboutStyles.tableYearMonth}>2011年8月</td>
							<td className={aboutStyles.tableContent}>東日本大震災の様子を関西からみていて、人間いつ死ぬかわからないと実感し、生きてる内にやりたいことやっておかないと、と思い立ち、埼玉県所沢市に住んでいた弟の元に転がり込む</td>
						</tr>
						<tr>
							<td className={aboutStyles.tableYearMonth}>2011年11月</td>
							<td className={aboutStyles.tableContent}>時給の高さと仕事の多様さに驚きながら、派遣事務の仕事に就く</td>
						</tr>
						<tr>
							<td className={aboutStyles.tableYearMonth}>2013年9月</td>
							<td className={aboutStyles.tableContent}>これまで1度も利用したことがなかったハローワークを利用。職業訓練でAndroidアプリ開発の募集要項を見つけ、即効申し込む</td>
						</tr>
						<tr>
							<td className={aboutStyles.tableYearMonth}>2014年1月</td>
							<td className={aboutStyles.tableContent}>職業訓練Androidアプリ開発を受講開始</td>
						</tr>
						<tr>
							<td className={aboutStyles.tableYearMonth}>2014年9月</td>
							<td className={aboutStyles.tableContent}>SES系の会社にアルバイトながらもプログラマーとして働き始める</td>
						</tr>
						<tr>
							<td className={aboutStyles.tableYearMonth}>2015年12月</td>
							<td className={aboutStyles.tableContent}>派遣エンジニアとして働き始める</td>
						</tr>
						<tr>
							<td className={aboutStyles.tableYearMonth}>2020年2月</td>
							<td className={aboutStyles.tableContent}>フリーランスとして働き始める</td>
						</tr>
					</tbody>
				</table>
			</div>
			<Sidebar />
		</Layout>
	)
}

export default AboutPage