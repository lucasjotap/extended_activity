/**
 * Simple localStorage persistence layer for EcoTech
 * Works with Netlify (client-side only)
 */

const STORAGE_KEYS = {
  DONATIONS: 'ecotech_donations',
  REQUESTS: 'ecotech_requests',
  FEEDBACK: 'ecotech_feedback',
}

// Generate unique ID
const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2)

// Generic storage functions
const getItems = (key) => {
  try {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

const saveItems = (key, items) => {
  try {
    localStorage.setItem(key, JSON.stringify(items))
    return true
  } catch {
    return false
  }
}

// Donations
export const getDonations = () => getItems(STORAGE_KEYS.DONATIONS)

export const addDonation = (donation) => {
  const donations = getDonations()
  const newDonation = {
    ...donation,
    id: generateId(),
    status: 'Disponível',
    createdAt: new Date().toISOString(),
  }
  donations.unshift(newDonation)
  saveItems(STORAGE_KEYS.DONATIONS, donations)
  return newDonation
}

export const updateDonationStatus = (id, status) => {
  const donations = getDonations()
  const index = donations.findIndex(d => d.id === id)
  if (index !== -1) {
    donations[index].status = status
    saveItems(STORAGE_KEYS.DONATIONS, donations)
    return true
  }
  return false
}

// Requests (from organizations)
export const getRequests = () => getItems(STORAGE_KEYS.REQUESTS)

export const addRequest = (request) => {
  const requests = getRequests()
  const newRequest = {
    ...request,
    id: generateId(),
    status: 'Pendente',
    createdAt: new Date().toISOString(),
  }
  requests.unshift(newRequest)
  saveItems(STORAGE_KEYS.REQUESTS, requests)
  return newRequest
}

// Feedback
export const getFeedback = () => getItems(STORAGE_KEYS.FEEDBACK)

export const addFeedback = (feedback) => {
  const allFeedback = getFeedback()
  const newFeedback = {
    ...feedback,
    id: generateId(),
    createdAt: new Date().toISOString(),
  }
  allFeedback.unshift(newFeedback)
  saveItems(STORAGE_KEYS.FEEDBACK, allFeedback)
  return newFeedback
}

// Stats
export const getStats = () => {
  const donations = getDonations()
  const requests = getRequests()
  
  return {
    totalDonations: donations.length,
    availableItems: donations.filter(d => d.status === 'Disponível').length,
    reservedItems: donations.filter(d => d.status === 'Reservado').length,
    donatedItems: donations.filter(d => d.status === 'Doado').length,
    totalRequests: requests.length,
    pendingRequests: requests.filter(r => r.status === 'Pendente').length,
  }
}

// Seed demo data if empty
export const seedDemoData = () => {
  if (getDonations().length === 0) {
    const demoData = [
      { type: 'notebook', brand: 'Dell Inspiron', condition: 'working', description: 'i5, 8GB RAM, 256GB SSD', donor: 'Maria S.', city: 'Curitiba', status: 'Disponível' },
      { type: 'desktop', brand: 'HP ProDesk', condition: 'working', description: 'i3, 4GB RAM, 500GB HD', donor: 'João P.', city: 'Pinhais', status: 'Disponível' },
      { type: 'tablet', brand: 'Samsung Tab A', condition: 'minor-issues', description: 'Tela com pequeno risco', donor: 'Ana C.', city: 'Curitiba', status: 'Reservado' },
      { type: 'notebook', brand: 'Lenovo ThinkPad', condition: 'working', description: 'i7, 16GB RAM, 512GB SSD', donor: 'Carlos M.', city: 'Curitiba', status: 'Doado' },
      { type: 'smartphone', brand: 'Motorola G8', condition: 'working', description: 'Android 11, 64GB', donor: 'Paula R.', city: 'Pinhais', status: 'Disponível' },
      { type: 'desktop', brand: 'Positivo Master', condition: 'needs-repair', description: 'Fonte com defeito', donor: 'Roberto L.', city: 'Curitiba', status: 'Disponível' },
    ]
    demoData.forEach(item => {
      const donations = getDonations()
      donations.push({ ...item, id: generateId(), createdAt: new Date().toISOString() })
      saveItems(STORAGE_KEYS.DONATIONS, donations)
    })
  }
}
