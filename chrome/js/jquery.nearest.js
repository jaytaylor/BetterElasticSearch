jQuery.fn.nearest = function(find_child, closest_parent) {
    if ('undefined' == typeof closest_parent) {
        if ($(document).find(find_child).length === 0) {
            return $([]);
        }
        var current = $(this);
        var child = null;
        while (0 !== current.length) {
            child = current.find(find_child);
            if (child.length) {
                return child;
            }
            if (current == current.parent()) {
                break;
            }
            current = current.parent();
        }

        // Return an empty set:
        return $([]);
    }
    var closest = $(this).closest(closest_parent);
    if (closest.filter(find_child).length) {
        return closest.filter(find_child);
    }
    return closest.find(find_child);
};
