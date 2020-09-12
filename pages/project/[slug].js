import React from 'react';
import { useRouter } from 'next/router';

function Project() {
  const router = useRouter();
  return (
    <div>
      Esta es la página del fucking proyecto {router.query.slug}
    </div>
  )
}

export default Project
