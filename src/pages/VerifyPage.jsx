import { useState, useCallback } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { getArtist } from '../data/artists';
import { getConcert } from '../data/concerts';
import { getListenerData } from '../data/listenerData';
import { useApp } from '../context/AppContext';
import VerifyStepIndicator from '../components/verify/VerifyStepIndicator';
import PlatformSelect from '../components/verify/PlatformSelect';
import MockOAuthScreen from '../components/verify/MockOAuthScreen';
import ListenerResults from '../components/verify/ListenerResults';

export default function VerifyPage() {
  const { artistId } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const returnTo = searchParams.get('returnTo') || '/concerts';

  const { saveVerification, unlockConcertSeats, isVerifiedFor } = useApp();

  const [step, setStep] = useState(1);
  const [platform, setPlatform] = useState(null);

  const artist = getArtist(artistId);
  const listenerData = getListenerData(artistId);

  // Figure out which concert this verification is for
  const returnConcertId = returnTo.match(/\/concerts\/(concert-\d+)/)?.[1];
  const concert = returnConcertId ? getConcert(returnConcertId) : null;

  const handlePlatformSelect = (p) => {
    setPlatform(p);
    setStep(2);
  };

  const handleOAuthComplete = useCallback(() => {
    if (listenerData) {
      saveVerification(artistId, { platform, ...listenerData });
    }
    setStep(3);
  }, [artistId, platform, listenerData, saveVerification]);

  const handleUnlock = () => {
    if (concert && isVerifiedFor(artistId, concert.joyPassPercentileRequired)) {
      unlockConcertSeats(concert.id);
    }
    navigate(returnTo);
  };

  if (!artist || !listenerData) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <h2 className="text-white text-2xl font-bold mb-4">Artist not found</h2>
        <button onClick={() => navigate('/concerts')} className="btn-primary">
          Back to Concerts
        </button>
      </div>
    );
  }

  const isEligible = concert
    ? listenerData.percentile <= concert.joyPassPercentileRequired
    : true;

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      {/* Artist header */}
      <div className="flex items-center gap-4 mb-10">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-brand-border"
        />
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-brand-purple mb-0.5">
            Verifying for
          </div>
          <div className="text-white font-bold text-xl">{artist.name}</div>
          <div className="text-gray-500 text-sm">{artist.genre}</div>
        </div>
      </div>

      <VerifyStepIndicator currentStep={step} />

      <div className="card-surface p-8 rounded-2xl">
        {step === 1 && <PlatformSelect onSelect={handlePlatformSelect} />}
        {step === 2 && (
          <MockOAuthScreen platform={platform} onComplete={handleOAuthComplete} />
        )}
        {step === 3 && (
          <ListenerResults
            artist={artist}
            listenerData={listenerData}
            concert={concert}
            isEligible={isEligible}
            onUnlock={handleUnlock}
          />
        )}
      </div>
    </div>
  );
}
