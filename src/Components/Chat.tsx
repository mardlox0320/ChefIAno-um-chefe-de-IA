import { useState } from 'react'
import "../App.css";
import Save from './Save';

interface ChatProps {
    children?: React.ReactNode;
}

interface RecipeResponse {
    receita: string;
    descricao_imagem: string;
}

const Chat = ({ children }: ChatProps) => {
    // Estados para guardar o texto digitado, a resposta e o carregamento
    const [ingredientes, setIngredientes] = useState<string>('');
    const [resposta, setResposta] = useState<RecipeResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(false);


    const handleEnviar = async () => {
        if (!ingredientes.trim()) return;

        setLoading(true);

        const listaIngredientes = ingredientes
            .split(',')
            .map((item) => item.trim())
            .filter((item) => item.length > 0);

        try {
            const response = await fetch('https://api-chatdeia.onrender.com/api/Recipes/Main', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ingredientes: listaIngredientes }),
            });

            if (!response.ok) {
                throw new Error('Erro na requisição');
            }

            const data = await response.json();
            
            // Pega o objeto { receita, descricao_imagem } dentro de success
            setResposta(data.success);
        } catch (error) {
            console.error("Erro ao chamar API:", error);
            alert("Erro ao conectar com o servidor. O backend em C# está rodando?");
        } finally {
            setLoading(false);
            setIngredientes(""); 
        }
    };

    return (
        <div id="chat-container">
            {children}
            <div id="response-container">
                <h1 id="response-title">
                    {resposta ? "Sua Receita:" : "Bem vindo ao ChefIAno"}
                </h1>
                <br/>

                {/* Se já tiver resposta, exibe a receita e a descrição */}
                {resposta ? (
                    <div id="response-text">
                        {/* O whiteSpace: 'pre-line' faz o \n da IA virar quebra de linha de verdade */}
                        <p style={{ whiteSpace: 'pre-line' }}>{resposta.receita}</p>
                        <br/>
                        <p style={{ fontStyle: 'italic', opacity: 0.8 }}>
                            <strong>Sugestão Visual:</strong> {resposta.descricao_imagem}
                        </p>
                    </div>
                    
                ) : (
                    <p id="response-text">
                        {loading 
                            ? "O ChefIAno está criando sua receita..." 
                            : "Fale os ingredientes que tem no momento, receitas que você quer fazer ou qualquer bizarrice que tiver em mente, e o ChefIAno vai sugerir deliciosas receitas para você!"}
                    </p>
                )}
            </div>

            <div id="input-container">
                <input 
                    type="text" 
                    id='Input' 
                    placeholder="Quais ingredientes você tem no momento? (ex: ovo, queijo, tomate)" 
                    value={ingredientes}
                    onChange={(e) => setIngredientes(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleEnviar()} // Envia com Enter
                />
                <button 
                    type="button" 
                    className="btn btn-dark"
                    onClick={handleEnviar}
                    disabled={loading}
                >
                    {loading ? "Pensando..." : "Enviar"}
                </button>
            </div>
            {resposta? <Save /> : null}
        </div>
    )
}

export default Chat;