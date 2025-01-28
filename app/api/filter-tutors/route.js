import { NextResponse } from 'next/server';

const API_BASE_URL = process.env.STRAPI_API_URL;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const sortParam = searchParams.get('sort');
  console.log('sortParam', sortParam);
  const response = await fetch(`${API_BASE_URL}/tutors?sort=${sortParam}`);
  const data = await response.json();

  return NextResponse.json({
    tutors: data.data,
    total: data.meta.pagination.total
  });
}

// const name = searchParams.get('name'); // Get the 'name' parameter
//   const sort = searchParams.get('sort'); // Get the 'sort' parameter

//   // Build the API URL dynamically based on filters and sorting
//   const API_BASE_URL = process.env.STRAPI_API_URL;
//   const filters = name ? `filters[name][$eq]=${name}` : '';
//   const sorting = sort ? `sort=${sort}` : '';

//   // Combine query parameters
//   const query = [filters, sorting].filter(Boolean).join('&');
//   const apiUrl = `${API_BASE_URL}/tutors${query ? `?${query}` : ''}`;