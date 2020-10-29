export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const expandHygge = (collection, id) => {
  const updated = collection.map((hygge) => {
    const newHygge = updateObject(hygge, {
      display: hygge.id === id ? hygge.display : !hygge.display,
      isExpanded: hygge.id === id ? !hygge.isExpanded : hygge.isExpanded,
    });
    return newHygge;
  });
  return updated;
};
