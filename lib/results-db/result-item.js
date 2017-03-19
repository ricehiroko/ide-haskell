"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const atom_1 = require("atom");
const utils_1 = require("../utils");
class ResultItem {
    constructor(parent, { uri, message, severity, position }) {
        this.parent = parent;
        this.uri = uri;
        this.message = utils_1.MessageObject.fromObject(message);
        this.severity = severity;
        this.position = position && atom_1.Point.fromObject(position);
    }
    destroy() {
        this.parent && this.parent.removeResult(this);
    }
}
exports.ResultItem = ResultItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVzdWx0cy1kYi9yZXN1bHQtaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUEwQjtBQUUxQixvQ0FBZ0Q7QUFZaEQ7SUFNRSxZQUFhLE1BQWlCLEVBQUUsRUFBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQWM7UUFDN0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUE7UUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLHFCQUFhLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLFlBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDeEQsQ0FBQztJQUVNLE9BQU87UUFDWixJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQy9DLENBQUM7Q0FDRjtBQWpCRCxnQ0FpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BvaW50fSBmcm9tICdhdG9tJ1xuaW1wb3J0IHtSZXN1bHRzREJ9IGZyb20gJy4vJ1xuaW1wb3J0IHtUTWVzc2FnZSwgTWVzc2FnZU9iamVjdH0gZnJvbSAnLi4vdXRpbHMnXG5cbmV4cG9ydCB0eXBlIFRTZXZlcml0eSA9ICdlcnJvcicgfCAnd2FybmluZycgfCAnbGludCcgfCBzdHJpbmdcbmV4cG9ydCB0eXBlIFRQb3NpdGlvbiA9IFBvaW50IHwgW251bWJlciwgbnVtYmVyXSB8IHtyb3c6IG51bWJlciwgY29sdW1uOiBudW1iZXJ9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJlc3VsdEl0ZW0ge1xuICB1cmk/OiBzdHJpbmdcbiAgcG9zaXRpb24/OiBUUG9zaXRpb25cbiAgbWVzc2FnZTogVE1lc3NhZ2VcbiAgc2V2ZXJpdHk6IFRTZXZlcml0eVxufVxuXG5leHBvcnQgY2xhc3MgUmVzdWx0SXRlbSB7XG4gIHB1YmxpYyB1cmk/OiBzdHJpbmdcbiAgcHVibGljIHBvc2l0aW9uPzogUG9pbnRcbiAgcHVibGljIG1lc3NhZ2U6IE1lc3NhZ2VPYmplY3RcbiAgcHVibGljIHNldmVyaXR5OiBUU2V2ZXJpdHlcbiAgcHVibGljIHBhcmVudD86IFJlc3VsdHNEQlxuICBjb25zdHJ1Y3RvciAocGFyZW50OiBSZXN1bHRzREIsIHt1cmksIG1lc3NhZ2UsIHNldmVyaXR5LCBwb3NpdGlvbn06IElSZXN1bHRJdGVtKSB7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcbiAgICB0aGlzLnVyaSA9IHVyaVxuICAgIHRoaXMubWVzc2FnZSA9IE1lc3NhZ2VPYmplY3QuZnJvbU9iamVjdChtZXNzYWdlKVxuICAgIHRoaXMuc2V2ZXJpdHkgPSBzZXZlcml0eVxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbiAmJiBQb2ludC5mcm9tT2JqZWN0KHBvc2l0aW9uKVxuICB9XG5cbiAgcHVibGljIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LnJlbW92ZVJlc3VsdCh0aGlzKVxuICB9XG59XG4iXX0=