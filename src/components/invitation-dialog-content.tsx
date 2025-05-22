
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
          An Invitation to an Unforgettable Escape
        </DialogTitle>
        <DialogDescription className="text-muted-foreground">
          A special journey awaits.
        </DialogDescription>
      </DialogHeader>
      <div className="prose prose-sm max-w-none text-foreground py-4">
        <p>My Dearest [Friend's Name],</p>
        <br />
        <p>
          I find myself brimming with excitement as I pen this invitation, hoping to entice you on a rather special adventure I've been planning.
          From <strong>June 14th to June 16th</strong>, I envision us escaping to the captivating province of Bataan, a place I believe holds wonders for us to discover together.
        </p>
        <p>
          Imagine us, first, immersed in a locale where history breathes through charming cityscapes, and where the echoes of significant moments blend seamlessly with vibrant, modern life. We could wander its historic heart, uncovering stories etched in its very fabric, and perhaps indulge in some delightful urban comforts.
        </p>
        <p>
          Then, picture a gentle transition to serene coastlines, where the soft murmur of waves against sun-drenched shores offers a perfect symphony for relaxation. It promises a blissful retreat, a chance to connect with nature's tranquil beauty and simply be.
        </p>
        <p>
          This journey, with its blend of rich heritage and peaceful seaside vistas, is something I've been dreaming of, and the thought of sharing it with you makes it all the more special. It would truly mean the world to me if you could join.
        </p>
        <p>Do let me know if this little escapade calls to you. I am already anticipating the wonderful memories we might create.</p>
        <br />
        <p>With heartfelt anticipation,</p>
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
