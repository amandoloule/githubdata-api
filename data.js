import { request } from '@octokit/request'

export async function getAllUsers(query) {
  try {
    const nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i
    let since = query
    if (since == null || Number.isNaN(since)) {
      since = 0
    }

    let pagesRemaining = true
    let nextUrl = ''

    const users = await request('GET /users', { since })

    const linkHeader = users.headers.link;

    pagesRemaining = linkHeader && linkHeader.includes(`rel=\"next\"`);

    if (pagesRemaining) {
      nextUrl = linkHeader.match(nextPattern)[0];
    }

    const dataAndNext = { data: [ ...users.data ], nextUrl }

    return dataAndNext
  } catch(error) {
    return { msg: error.message }
  }
}

export async function getUser(param) {
  try {
    const details = await request(`GET /users/${param}`, {})

    return { data: details.data }
  } catch(error) {
    return { msg: error.message }
  }
}

export async function getRepo(param) {
  try {
    const details = await request(`GET /users/${param}/repos`, {})

    return { data: details.data }
  } catch(error) {
    return { msg: error.message }
  }
}
