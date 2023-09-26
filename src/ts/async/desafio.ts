export function runCode() {
    // Tu código aquí 👈
    const url = 'https://domain-api-com';
    const fn = async (api: string) => {
        try{
        const data = await fetch(api);
        const   dataEspecific = await data.json();
    }catch(err){
        throw new Error('API Not Found')
    }
    }
    fn(url)
    }

runCode();