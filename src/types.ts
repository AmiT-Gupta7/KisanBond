export type UserRole = 'farmer' | 'buyer' | 'fpo' | 'facilitator' | 'admin';

export interface UserProfile {
  uid: string;
  name: string;
  phone: string;
  role: UserRole;
  orgId?: string;
  photoURL?: string;
  createdAt: number;
}

export interface Pod {
  id: string;
  name: string;
  village: string;
  cropFocus: string[];
  createdBy: string;
  createdAt: number;
  memberIds: string[];
  currentScore: number;
}

export interface Contract {
  id: string;
  podId: string;
  buyerId: string;
  crop: string;
  season: string;
  expectedVolume: number;
  basePrice: number;
  priceUnit: string;
  qualityParams: {
    maxMoisture: number;
    minGrade: string;
    [key: string]: any;
  };
  paymentTerms: string;
  startDate: number;
  endDate: number;
  status: 'draft' | 'pending_pod' | 'active' | 'completed' | 'cancelled';
  createdAt: number;
}

export interface Delivery {
  id: string;
  contractId: string;
  podId: string;
  farmerId?: string;
  date: number;
  quantity: number;
  unit: string;
  quality?: {
    moisture: number;
    grade: string;
    acceptedQuantity: number;
    rejectedQuantity: number;
    rejectionReason?: string;
  };
  loggedBy: string;
  createdAt: number;
}

export interface ScoreSnapshot {
  id: string;
  podId: string;
  date: number;
  value: number;
  components: {
    delivery: number;
    quality: number;
    repayment: number;
  };
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  conditions: any;
  benefit: any;
  isActive: boolean;
}

export interface Notification {
  id: string;
  userId?: string;
  podId?: string;
  type: 'reward_unlocked' | 'contract_update' | 'system' | 'delivery_logged';
  title: string;
  message: string;
  data?: any;
  isRead: boolean;
  createdAt: number;
}

export interface Message {
  id: string;
  senderId: string;
  podId?: string;
  recipientId?: string;
  content: string;
  createdAt: number;
}
