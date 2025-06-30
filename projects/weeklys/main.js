document.addEventListener('DOMContentLoaded', () => {
  // Fetch the JSON data
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const boxFrequency = calcBoxFrequency(data.length)
      // Define the dimensions and margins of the SVG
      const width = 1000
      const height = 1000
      const boxSizeWidth = width / boxFrequency.countPerRow;
      const boxSizeHeight = height / boxFrequency.countPerCol;

      // Create the SVG container
      const svg = d3.select('#chart')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')

      const imageExists = (path) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
          img.src = path;
        });
      };

      // Create the checkered pattern
      data.forEach((d, i) => {
        const row = Math.floor(i / boxFrequency.countPerRow);
        const col = i % boxFrequency.countPerRow;
        const x = col * boxSizeWidth;
        const y = row * boxSizeHeight;

        const fillColor = ((i + row) % 2 === 0) ? '#fbe9e7ff' : '#e9e6e2ff'

        svg.append('rect')
          .attr('x', x)
          .attr('y', y)
          .attr('width', boxSizeWidth)
          .attr('height', boxSizeHeight)
          .attr('fill', fillColor)
          .attr('style', `fill: ${fillColor.slice(0, 7)}; fill-opacity: 1`)

        const textNode = svg.append('text')
          .attr('class', 'text')
          .attr('x', x)
          .attr('y', (row + 1) * boxSizeHeight - 10)
          .attr("style", "font-family: 'Cantarell, Bold', sans-serif; font-weight: bold; font-size: 32px; text-align: center; fill: #666666")

        const dateTextParts = formatDate(d.startsAt)

        const tspan1 = textNode.append('tspan')
          .attr('x', x)
          .attr('dy', '-10px')
          .text(dateTextParts[1])

        const tspan2 = textNode.append('tspan')
          .attr('x', x)
          .attr('dy', '-32px')
          .text(dateTextParts[0])

        const bboxText1 = tspan1.node().getBBox()
        const textWidth1 = bboxText1.width
        const newX1 = (boxSizeWidth - textWidth1) / 2
        tspan1.attr('x', x + newX1)

        const bboxText2 = tspan2.node().getBBox()
        const textWidth2 = bboxText2.width
        const newX2 = (boxSizeWidth - textWidth2) / 2
        tspan2.attr('x', x + newX2)

        const imagePath = `clubs/${d.clubId}-logo.png`
        const fallbackImagePath = `clubs/${d.clubId}-logo.jpg`

        imageExists(imagePath).then(exists => {
          const imageSrc = exists ? imagePath : fallbackImagePath
          svg.append('image')
            .attr('xlink:href', imageSrc)
            .attr('x', x + 25)
            .attr('y', y + 25)
            .attr('width', boxFrequency.avatarWidth)
            .attr('height', boxFrequency.avatarHeight)
            .attr('class', 'image')
        })
      })
    })
    .catch(error => console.error('Error fetching the JSON data:', error));
});

function calcBoxFrequency(clubEventsSize) {
  if (clubEventsSize <= 12) {
    return {
      countPerRow: 4,
      countPerCol: 3,
      avatarWidth: 200,
      avatarHeight: 200,
    }
  } else if (clubEventsSize <= 16) {
    return {
      countPerRow: 4,
      countPerCol: 4,
      avatarWidth: 180,
      avatarHeight: 180,
    }
  } else if (clubEventsSize <= 20) {
    return {
      countPerRow: 5,
      countPerCol: 4,
      avatarWidth: 180,
      avatarHeight: 180,
    }
  } else {
    return {
      countPerRow: 5,
      countPerCol: 5,
      avatarWidth: 180,
      avatarHeight: 180,
    }
  }
}

function formatDate(dateString) {
  const date = dateFns.parse(dateString, "yyyy-MM-dd HH:mm", new Date())
  const dayOfWeek = dateFns.format(date, "EE").slice(0, 2)
  const dateRepresentation = dateFns.format(date, "dd.MM.")
  const time = dateFns.format(date, "HH:mm")
  return [`${dayOfWeek} ${dateRepresentation}`, `@ ${time}`]
}
