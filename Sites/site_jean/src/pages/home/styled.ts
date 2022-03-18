import styled from 'styled-components';
  

export const Container = styled.div`
    background: #BC3624;
    position: fixed;
    justify-content: space-between;

    width: 100%;
    height: 100px;
    display: flex;
    
    
    
    .logo {
        height: 100%;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        img{  
            width: 350px;            
        }

    }

    .menu-bg {
        background: #2c70ff;
    }

    .menu {
        // border: 1px solid black;
        //background: #f1d;
        margin: 50px 0 0 0;
        
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }

    .menu a {
        color: white;
        text-decoration: none;
    }

    .menu-logo a {
        font-size: 2.25em;
        font-weight: bold;
        margin: 0 10px;
    }

    .menu-nav ul {
        display: flex;
        flex-wrap: wrap;
        
    }

    .menu-nav li {
        //background: #f1d;
        margin: 0 20px 0 0;
        display: inline;
    }

    .menu-nav a {
        font-size: 1.25em;
        display: block;
        padding: 10px;
    }

    .menu-nav a:hover {
        color: #000
    }



    .orcamento {
        a {
            padding: 10px;
            text-decoration: none;
            height: 100%;
            width: 200px;
            float: right; 
        
            font-size: 20px;
            font-weight: bold;
            color: #fff;
            display: flex;
            align-items: center;


            
            margin-right: 1%;
            //border: 1px solid #000;


            img{  
                width: 250px;
            }
        }
    }
`;
