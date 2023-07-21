import Head from 'next/head'
import LayoutHeader from '../components/Headers/LayoutHeader'
import { Layout } from "antd";

export default function Home() {
  return (
    <Layout >
        <LayoutHeader />
    </Layout>
  )
}