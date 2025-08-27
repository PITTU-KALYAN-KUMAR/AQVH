// Dummy API service for quantum ML trading data
export interface MarketData {
  timestamp: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  prediction?: 'BUY' | 'SELL' | 'HOLD';
  confidence?: number;
}

export interface ModelAccuracy {
  model: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
}

export interface PredictionData {
  date: string;
  actual: number;
  vqc_prediction: number;
  svm_prediction: number;
  confidence: number;
  signal: 'BUY' | 'SELL' | 'HOLD';
}

export interface QuantumMetrics {
  circuit_depth: number;
  quantum_volume: number;
  gate_fidelity: number;
  coherence_time: number;
  error_rate: number;
}

// Dummy data generators
const generateMarketData = (days: number = 30): MarketData[] => {
  const data: MarketData[] = [];
  let currentPrice = 7800; // FTSE 100 base price
  
  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    
    const volatility = 0.02;
    const change = (Math.random() - 0.5) * volatility * currentPrice;
    const open = currentPrice;
    const close = currentPrice + change;
    const high = Math.max(open, close) + Math.random() * 20;
    const low = Math.min(open, close) - Math.random() * 20;
    
    data.push({
      timestamp: date.toISOString(),
      open,
      high,
      low,
      close,
      volume: Math.floor(Math.random() * 1000000) + 500000,
      prediction: Math.random() > 0.6 ? 'BUY' : Math.random() > 0.3 ? 'HOLD' : 'SELL',
      confidence: 0.7 + Math.random() * 0.25
    });
    
    currentPrice = close;
  }
  
  return data;
};

// API functions
export const fetchMarketData = async (): Promise<MarketData[]> => {
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
  return generateMarketData(30);
};

export const fetchModelAccuracies = async (): Promise<ModelAccuracy[]> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return [
    {
      model: 'VQC (Quantum)',
      accuracy: 87.3,
      precision: 85.1,
      recall: 89.2,
      f1Score: 87.1
    },
    {
      model: 'SVM (Classical)',
      accuracy: 82.1,
      precision: 80.4,
      recall: 83.8,
      f1Score: 82.0
    },
    {
      model: 'IBM Quantum',
      accuracy: 89.1,
      precision: 87.5,
      recall: 90.3,
      f1Score: 88.9
    }
  ];
};

export const fetchPredictions = async (): Promise<PredictionData[]> => {
  await new Promise(resolve => setTimeout(resolve, 400));
  const predictions: PredictionData[] = [];
  
  for (let i = 7; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    
    const actual = 7800 + (Math.random() - 0.5) * 200;
    const vqc_prediction = actual + (Math.random() - 0.5) * 50;
    const svm_prediction = actual + (Math.random() - 0.5) * 80;
    
    predictions.push({
      date: date.toISOString().split('T')[0],
      actual,
      vqc_prediction,
      svm_prediction,
      confidence: 0.75 + Math.random() * 0.2,
      signal: Math.random() > 0.5 ? 'BUY' : 'SELL'
    });
  }
  
  return predictions;
};

export const fetchQuantumMetrics = async (): Promise<QuantumMetrics> => {
  await new Promise(resolve => setTimeout(resolve, 200));
  return {
    circuit_depth: 12,
    quantum_volume: 64,
    gate_fidelity: 0.995,
    coherence_time: 150, // microseconds
    error_rate: 0.005
  };
};

export const fetchLiveMetrics = async () => {
  await new Promise(resolve => setTimeout(resolve, 100));
  return {
    currentPrice: 7845.32 + (Math.random() - 0.5) * 20,
    dailyChange: (Math.random() - 0.5) * 100,
    volume: Math.floor(Math.random() * 500000) + 1000000,
    volatility: 0.15 + Math.random() * 0.1,
    nextPrediction: Math.random() > 0.5 ? 'BUY' : 'SELL',
    confidence: 0.8 + Math.random() * 0.15
  };
};