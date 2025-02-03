import React, { useRef } from 'react';




const Privatliv = () => {


  return (
    <div classNameName="bg-background ">
 
 <div className="max-w-2xl mx-auto p-6 space-y-8">
    <h1 className="text-3xl font-bold mb-8">Privatlivspolitik</h1>
    
    <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Dataansvarlig</h2>
        <p className="space-y-1">
            Yoganord<br />
            James Ingemann Hunt<br />
            Nørretoftevej 20, 3200 Helsinge<br />
            37122696<br />
            Email: james@jameshunt.dk
        </p>
    </div>
    
    <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Hvilke data indsamler vi</h2>
        <p><span className="font-semibold">Brugeroplysninger:</span> Email og brugerprofil via Supabase</p>
        <p><span className="font-semibold">Betalingsdata:</span> Transaktioner og abonnementer via RevenueCat</p>
        <p><span className="font-semibold">Streaming:</span> Brugsdata fra Cloudflare Stream</p>
        <p><span className="font-semibold">Tekniske data:</span> Enhedsinfo og app-brug via Expo</p>
    </div>
    
    <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Formål med databehandling</h2>
        <div className="space-y-2">
            <p>Levering af app-tjenester</p>
            <p>Administration af abonnementer</p>
            <p>Forbedring af brugeroplevelsen</p>
            <p>Teknisk support</p>
        </div>
    </div>
    
    <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Databehandlere</h2>
        <div className="space-y-2">
            <p>Supabase: Database og autentificering</p>
            <p>RevenueCat: Betalingshåndtering</p>
            <p>Cloudflare: Video streaming</p>
            <p>Expo: App-distribution</p>
        </div>
    </div>
    
    <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Dine rettigheder</h2>
        <p>Du har ret til at:</p>
        <div className="space-y-2 pl-4">
            <p>Få indsigt i dine data</p>
            <p>Få rettet ukorrekte data</p>
            <p>Få slettet dine data</p>
            <p>Trække samtykke tilbage</p>
            <p>Klage til Datatilsynet</p>
        </div>
    </div>
    
    <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Opbevaring</h2>
        <p>Vi opbevarer dine data så længe du har en aktiv konto eller det er nødvendigt for at levere vores tjenester.</p>
    </div>
    
    <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Ændringer</h2>
        <p>Vi forbeholder os ret til at opdatere denne politik. Væsentlige ændringer vil blive meddelt via appen.</p>
        <p className="text-sm text-gray-600 mt-4">Sidst opdateret: 3. feb 2025</p>
    </div>
</div>
        
     
    </div>
  );
};

export default Privatliv;
