import { User } from './user.model.js'

export const getUserById = async (userId) => {
    const user = await User.query().findById(userId)
    return user
}

export const createUser = async (user) => {
    const inserted = await User.query().insert(user)
    return inserted
}

