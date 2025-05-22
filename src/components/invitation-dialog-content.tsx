
import { Mail } from 'lucide-react';
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function InvitationDialogContent() {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="flex items-center text-primary">
          <Mail className="mr-2 h-5 w-5" />
          An Invitation for You
        </DialogTitle>
        <DialogDescription className="text-muted-foreground">
          A little adventure I hope we can share.
        </DialogDescription>
      </DialogHeader>
      <div className="prose prose-sm max-w-none text-foreground py-4">
        <p>My Dearest Yashy,</p>
        <br />
        <p>
          I find myself thinking of a special journey, one I hope we can take together.
          From <strong>June 14th to June 16th</strong>, I picture us exploring the quiet beauty of Bataan.
        </p>
        <p>
          Imagine us first in a city where history whispers from old walls and charming squares. We could walk its streets, feeling the stories of the past, and then perhaps enjoy the simple warmth of its present-day life.
        </p>
        <p>
          Then, let's dream of the coast, where the land meets the sea. We could find peaceful shores, listen to the gentle rhythm of the waves, and let the calm of the ocean refresh our spirits. It would be a quiet escape, a chance to simply be.
        </p>
        <p>
          This thought, of discovering such places—a city with a soul and a seaside that soothes—feels all the more wonderful if you are there. Sharing this with you would make the memories truly shine.
        </p>
        <p>What do you think of this little plan? Knowing you might join fills me with a quiet joy.</p>
        <br />
        <p>With heartfelt anticipation,</p>
        <p>Sine Cera</p>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="outline">
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </>
  );
}
