import { NextResponse } from 'next/server';

const API_BASE_URL = process.env.STRAPI_API_URL;

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const documentId = searchParams.get('id');

  try {
    const urlRequest = `${API_BASE_URL}/tutors?filters[documentId][$eq]=${documentId}`;
    const response = await fetch(urlRequest);
    const data = await response.json();
    return NextResponse.json({
      tutor: data.data.length > 0 ? data.data[0] : null
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tutor" });
  }
}