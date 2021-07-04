import React from 'react';

import logoone from '../../assets/logoone.svg';



import {Container, Header, Content} from './styles';

const Dashboard: React.FC = ( ) => (
    <Container>
        <Header>
            <Content>
                <img src={logoone}/>
                <ul>
                    <li><a href='#'>Dashboard</a></li>
                    <li><a href='#' >Usuários</a></li>
                    <li><a href='#'>Configurações</a></li>
                    <li><a href='#'>Solicitações</a></li>
                </ul>
                <ul>
                <li><a href='#' style={{float:'right', marginLeft: 20}}>Conta</a></li>
                </ul>
            </Content>
        </Header>
        

    </Container>
);

export default Dashboard;