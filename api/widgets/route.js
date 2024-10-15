
export async function POST(req) {
    const body = await req.json();
    const { name, url } = body;
  
    if (!name || !url) {
      return new Response(JSON.stringify({ message: 'Please fill out all required fields' }), { status: 400 });
    }
  
    return new Response(JSON.stringify({ message: 'Saved Successfully' }), { status: 200 });
  }
  