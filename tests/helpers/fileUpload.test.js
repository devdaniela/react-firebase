import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
    cloud_name: 'ddrg-cursos',
    api_key: '388965283853524',
    api_secret: 'RssU3i1hTmgaKDi0euStHS6Eilk',
    secure: true
})

describe('Pruebas en fileUpload', () => { 
    
    test('debe de subir el archivo correctamente a cloudinary', async() => { 
        
        const imageUrl = 'https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_640.jpg';
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');
    
        const url = await fileUpload( file );
        expect( typeof url ).toBe('string');

        const segments = url.split('/');
        const imageId = segments[ segments.length -1 ].replace('.jpg','');
        
        const respCloud = await cloudinary.api.delete_resources([ 'journal/' + imageId ], {
            resource_type: 'image'
        });
        // console.log( { respCloud } );
        
     });

     test('debe de retornar null', async() => {

        const file = new File([], 'foto.jpg');
        const url = await fileUpload( file );
        
        expect( url ).toBe( null );

     });

 })