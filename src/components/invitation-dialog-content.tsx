
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
          An Invitation to Explore Bataan!
        </DialogTitle>
        <DialogDescription className="text-muted-foreground">
          Share this with a friend to plan your Bataan adventure.
        </DialogDescription>
      </DialogHeader>
      <div className="prose prose-sm max-w-none text-foreground py-4">
        <p>Dearest [Friend's Name],</p>
        <br />
        <p>I hope this letter finds you well!</p>
        <p>
          I'm so excited to invite you on an adventure to the beautiful
          province of Bataan from <strong>June 14th to June 16th</strong>! I've been wanting to explore its rich history and
          stunning natural landscapes, and I immediately thought of sharing
          this experience with you.
        </p>
        <p>
          I've been envisioning our trip: starting in Bataan's vibrant capital city, we could immerse ourselves in its historical significance and enjoy some of its modern comforts. Think fascinating stories from the past and maybe a bit of city exploration.
        </p>
        <p>
          Then, for a complete change of scenery, we could head to a picturesque coastal town in Morong. Imagine relaxing by the sea, enjoying the beautiful beaches, and just soaking in the tranquil atmosphere. It would be the perfect way to unwind and appreciate Bataan's natural beauty.
        </p>
        <p>
          The dates are set for June 14th to 16th, which I hope works for you! It
          would be wonderful to have you join me for a memorable getaway.
        </p>
        <p>Let me know if you're in, and we can look forward to it!</p>
        <br />
        <p>Warmly,</p>
        <p>[Your Name]</p>
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
