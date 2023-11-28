import PropTypes from 'prop-types';

// const newMessage = {
//     message: 'Hola mundo',
//     title: 'Jorge Luis'
// };

// const getResult = (a, b) => {
//     return a + b
// }


export const FirstApp = ({ title, subtitle, name }) => {

    // console.log(props);
    return (
        <>
            <h1 data-testid="test-title">{ title }</h1>
            {/* <h1>{ getResult(1,2) }</h1> */}
            {/* <code>{ JSON.stringify(newMessage) }</code> */}
            <p>{ subtitle }</p>
            <p>{ subtitle }</p>
            <p>{ name }</p>
        </>
    )

}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
}

FirstApp.defaultProps = {
    name: 'Jorge Luis Paredes',
    subtitle: 'Soy un subtitulo',
    // title: 'No hay título',
}