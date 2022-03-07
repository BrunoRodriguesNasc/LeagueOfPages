import React from 'react';
import ContainerInfo from '../components/containers/containerInfo/ContainerInfo';
import HeaderHome from '../components/HeaderHome/HeaderHome';
const Home = () => {
    return (
        <>
            <HeaderHome/>
            <ContainerInfo />
            <footer className="footer">Bruno Rodrigues do Nascimento</footer>
        </>
    );
}
export default Home;
