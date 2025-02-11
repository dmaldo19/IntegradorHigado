import React, { useState } from 'react';
import { Activity, Brain, FileText, History, Layout, Clover as Liver, Settings, User2 } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('diagnosis');
  const [selectedDataset, setSelectedDataset] = useState('');
  const [analysisResult, setAnalysisResult] = useState<null | {
    condition: string;
    severity: string;
    affectedArea: string;
  }>(null);

  const handleAnalysis = () => {
    // Simulated analysis result
    setAnalysisResult({
      condition: "Hígado Graso",
      severity: "Moderado",
      affectedArea: "Lóbulo Derecho"
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img 
                src="/./img/liver_508747.png" 
                alt="LiverDiag Pro Logo" 
                className="h-8 w-8"
              />
              <span className="ml-2 text-xl font-semibold text-gray-800">Sistema de Diagnóstico Hepático</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <User2 className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <Settings className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64 bg-white rounded-lg shadow-md p-4 h-[calc(100vh-8rem)]">
            <div className="space-y-2">
              <button 
                onClick={() => setActiveTab('diagnosis')}
                className={`flex items-center space-x-2 w-full p-2 rounded-lg ${
                  activeTab === 'diagnosis' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                }`}
              >
                <Activity className="h-5 w-5" />
                <span>Diagnóstico</span>
              </button>
              <button 
                onClick={() => setActiveTab('visualization')}
                className={`flex items-center space-x-2 w-full p-2 rounded-lg ${
                  activeTab === 'visualization' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                }`}
              >
                <Brain className="h-5 w-5" />
                <span>Visualización 3D</span>
              </button>
              <button 
                onClick={() => setActiveTab('reports')}
                className={`flex items-center space-x-2 w-full p-2 rounded-lg ${
                  activeTab === 'reports' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                }`}
              >
                <FileText className="h-5 w-5" />
                <span>Informes</span>
              </button>
              <button 
                onClick={() => setActiveTab('history')}
                className={`flex items-center space-x-2 w-full p-2 rounded-lg ${
                  activeTab === 'history' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                }`}
              >
                <History className="h-5 w-5" />
                <span>Historial</span>
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-white rounded-lg shadow-md p-6">
            {activeTab === 'diagnosis' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800">Análisis Hepático</h2>
                
                {/* Dataset Selection */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Seleccionar Conjunto de Datos</label>
                    <select 
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={selectedDataset}
                      onChange={(e) => setSelectedDataset(e.target.value)}
                    >
                      <option value="">Seleccionar datos</option>
                      <option value="dataset1">Datos del Paciente #1</option>
                      <option value="dataset2">Datos del Paciente #2</option>
                      <option value="dataset3">Datos del Paciente #3</option>
                    </select>
                  </div>

                  <button
                    onClick={handleAnalysis}
                    disabled={!selectedDataset}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
                  >
                    Analizar Datos
                  </button>
                </div>

                {/* Analysis Results */}
                {analysisResult && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Resultados del Análisis</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 bg-white rounded-lg shadow">
                        <p className="text-sm text-gray-500">Condición</p>
                        <p className="text-lg font-medium">{analysisResult.condition}</p>
                      </div>
                      <div className="p-4 bg-white rounded-lg shadow">
                        <p className="text-sm text-gray-500">Severidad</p>
                        <p className="text-lg font-medium">{analysisResult.severity}</p>
                      </div>
                      <div className="p-4 bg-white rounded-lg shadow">
                        <p className="text-sm text-gray-500">Área Afectada</p>
                        <p className="text-lg font-medium">{analysisResult.affectedArea}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'visualization' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Visualización 3D del Hígado</h2>
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Layout className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Visor de Modelo 3D</p>
                    <p className="text-sm text-gray-400">(Área de Integración Unity/Needle)</p>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sección del Hígado</label>
                  <select 
                    id="liver-selection"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="0">Sección 1 - Lóbulo Derecho</option>
                    <option value="1">Sección 2 - Lóbulo Izquierdo</option>
                    <option value="2">Sección 3 - Lóbulo Caudado</option>
                    <option value="3">Sección 4 - Lóbulo Cuadrado</option>
                  </select>
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Informes Médicos</h2>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Informe de Análisis Hepático</h3>
                        <p className="text-sm text-gray-500">Generado el 15 de marzo de 2024</p>
                      </div>
                      <FileText className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Informe de Progreso del Tratamiento</h3>
                        <p className="text-sm text-gray-500">Generado el 10 de marzo de 2024</p>
                      </div>
                      <FileText className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'history' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Historial del Paciente</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium mb-2">Diagnósticos Previos</h3>
                    <div className="space-y-2">
                      <div className="p-3 bg-white rounded border">
                        <p className="font-medium">Hígado Graso - Grado 2</p>
                        <p className="text-sm text-gray-500">Diagnosticado el 28 de febrero de 2024</p>
                      </div>
                      <div className="p-3 bg-white rounded border">
                        <p className="font-medium">Evaluación Inicial</p>
                        <p className="text-sm text-gray-500">Diagnosticado el 15 de enero de 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
