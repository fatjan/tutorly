import { NextResponse } from 'next/server';

const API_BASE_URL = process.env.STRAPI_API_URL;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const sortParam = searchParams.get('sort');

  const response = await fetch(`${API_BASE_URL}/tutors?sort=${sortParam}`);
  const data = await response.json();

  return NextResponse.json({
    tutors: data.data,
    total: data.meta.pagination.total
  });
}