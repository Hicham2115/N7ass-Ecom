# Cuveroo homepage visual QA

**Findings**

- [P2] A normalized side-by-side comparison is still blocked.
  Location: Homepage header, hero, and Shop by Category section.
  Evidence: The category reference is a 1375 × 418 px screenshot. The latest live capture is 1250 × 712 px. The in-app browser previously blocked the local comparison page because its URL used the `file:` protocol.
  Impact: The Product Design QA workflow requires both artifacts in one comparison input at a matching viewport. Exact visual fidelity cannot be signed off with the available capture.
  Fix: Re-run visual QA in a browser surface that permits the comparison input, or provide an accessible browser screenshot workflow.

**Open Questions**

- None about the design. The remaining blocker is the comparison capture method.

**Implementation Checklist**

- Header and hero use Tailwind utility classes.
- Header follows the reference’s centered CUVEROO wordmark, centered second-row navigation, and left/right icon layout.
- Hero uses the Cuveroo scalloped pendant image, requested copy, and a copper collection CTA.
- Shop by Category uses a centered uppercase heading with copper divider arrows, an Explore All link, five image cards, centered uppercase labels, and the reference descriptions.
- Category styling uses Tailwind utilities; obsolete category-specific CSS rules were removed.
- `npm run lint` passes and `git diff --check` passes.
- Re-run the normalized visual comparison before treating the design QA as passed.

**Follow-up Polish**

- The reference screenshot and live capture use different viewport sizes. Exact pixel-level typography and spacing checks remain open.

**QA Evidence**

- Category source visual: `/var/folders/bg/546z30l93z5f_prwnwmk28c40000gn/T/TemporaryItems/NSIRD_screencaptureui_eRe2Bi/Screenshot 2026-10-14 at 23.41.30.png` (1375 × 418 px).
- Header and hero source visual: `/var/folders/bg/546z30l93z5f_prwnwmk28c40000gn/T/TemporaryItems/NSIRD_screencaptureui_K8FofT/Screenshot 2026-10-14 at 23.31.56.png` (1952 × 946 px).
- Implementation: `http://localhost:3000/`, captured in the Codex in-app browser at 1250 × 712 px.
- State: Homepage, desktop layout, menu closed. Updated category strip is visible above the next section.
- Comparison history: The live strip was reviewed after image and layout changes. It follows the reference’s five-card arrangement and wording; normalized side-by-side verification remains blocked by the browser `file:` URL restriction.

final result: blocked
