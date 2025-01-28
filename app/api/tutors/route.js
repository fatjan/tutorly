import { NextResponse } from 'next/server';

const API_BASE_URL = process.env.STRAPI_API_URL;

export async function GET() {
  const response = await fetch(`${API_BASE_URL}/tutors`);
  const data = await response.json();

  return NextResponse.json({
    tutors: data.data,
    total: data.meta.pagination.total
  });
}